import React, { useState } from "react"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"
import { useFocus } from "./useFocus"


type NewItemFormProps = {
  onAdd(text: string): void
}

export const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState("")
  const { onAdd } = props; // check
 // const inputRef = useFocus()

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={e => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}> Create
      </NewItemButton>
    </NewItemFormContainer>
  )

}