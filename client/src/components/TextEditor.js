// Import React dependencies.
import React, { useState, useCallback } from 'react'
// Import the Slate editor factory.
import { createEditor, Transforms } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

// Define a React component renderer for our code blocks.
const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

//Set the default element
const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}

const Editor = () => {

  // Create a Slate editor object that won't change across renders.
  const [editor] = useState(() => withReact(createEditor()))

  const initialValue = [
      {
        type: 'paragraph',
        children: [{ text: 'Placeholder text, please add your note here...' }],
      },
    ]

   const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  // Render the Slate context.
  return (
      // The editable component included within the context
      <Slate editor={editor} value={initialValue}>
        <Editable 
          //Handler that prints out the key which is pressed
          renderElement={renderElement}
          onKeyDown ={ (e) => {
            if (e.key ==='`' && e.ctrlKey) {
              e.preventDefault()
              Transforms.setNodes(
                editor,
                { type: 'code' },
                { match: n => Editor.isBlock(editor,n) }
              )
            }
          }}
        />
      </Slate>
    )
  }

  export default Editor;