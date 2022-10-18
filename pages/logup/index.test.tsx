import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Logup from './index'
import * as React from 'react'

describe('account register form', () => {
  it('check default state', async () => {
    const { findByTestId } = render(<Logup />)
    const logupForm = await findByTestId('logup-form')

    expect(logupForm).toHaveFormValues({
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    })
  })

  it('input wrong input length', async () => {
    const { findByTestId } = render(<Logup />)
    const longText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    const fullNameInput = await findByTestId('account-fullName')
    fireEvent.change(fullNameInput as HTMLInputElement, { target: { value: longText } })

    expect((fullNameInput as HTMLInputElement).value.slice(0, 50)).toBe(
      'Lorem Ipsum is simply dummy text of the printing a'
    )
  })

  it('submit without value', async () => {
    const { findByTestId } = render(<Logup />)
    const button = await findByTestId('button')

    fireEvent.click(button)
    await new Promise((r: any) => setTimeout(r, 2000))

    const listTextField = document.body.querySelector(
      '.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorInfo'
    )
    expect(listTextField as HTMLInputElement).toHaveClass('Mui-error')
  })
})

// import '@testing-library/jest-dom/extend-expect'
// import { act, fireEvent, render } from '@testing-library/react'
// import Logup from './index'
// import * as React from 'react'

// describe('account register form', () => {
//   it('check default state', async () => {
//     const { findByTestId } = render(<Logup />)
//     const logupForm = await findByTestId('logup-form')

//     expect(logupForm).toHaveFormValues({
//       fullName: '',
//       email: '',
//       password: '',
//       retypePassword: '',
//     })
//   })

//   it('input wrong input length', async () => {
//     const { findByTestId } = render(<Logup />)
//     const longText =
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

//     const fullNameInput = await findByTestId('account-fullName')
//     fireEvent.change(fullNameInput as HTMLInputElement, { target: { value: longText } })
//     await new Promise((r: any) => setTimeout(r, 2000))
//     clg
//     expect((fullNameInput as HTMLInputElement).value).toBe(
//       'Lorem Ipsum is simply dummy text of the printing a'
//     )
//   })

//   // it('keeps the submit button disabled when only confirm is checked', () => {
//   //   const { getByTestId } = render(<Logup />)

//   //   const confirm = getByTestId('account-delete-confirm')
//   //   const submit = getByTestId('account-delete-submit')

//   //   fireEvent.click(confirm)
//   //   expect(submit).toHaveClass('Mui-disabled')
//   // })

//   // it('enables the submit button when the form is filled out', () => {
//   //   const { getByTestId } = render(<Logup />)

//   //   const password = getByTestId('account-delete-password')
//   //   const confirm = getByTestId('account-delete-confirm')
//   //   const submit = getByTestId('account-delete-submit')

//   //   fireEvent.change(password, { target: { value: 'password' } })
//   //   fireEvent.click(confirm)

//   //   expect(submit).not.toHaveClass('Mui-disabled')
//   // })
// })
