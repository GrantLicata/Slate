// Import React dependencies.
import React, { useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

const Editor = () => {

    const initialValue = [
        {
          type: 'paragraph',
          children: [{ text: 'Placeholder text, please add your note here...' }],
        },
      ]

    // Create a Slate editor object that won't change across renders.
    const [editor] = useState(() => withReact(createEditor()))
    // Render the Slate context.
    return (
        // The editable component included within the context
        <Slate editor={editor} value={initialValue}>
          <Editable />
        </Slate>
      )
  }

  export default Editor;