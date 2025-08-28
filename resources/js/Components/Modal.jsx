import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

export default function Modal({
  children,
  show = false,
  maxWidth = '2xl',
  closeable = true,
  onClose = () => {},
  className = "",
}) {
  const close = () => { if (closeable) onClose() }

  const maxWidthClass = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
  }[maxWidth]

  const basePanel =
    `relative w-full ${maxWidthClass} mx-auto bg-white shadow-xl transition-all
     max-h-[92vh] sm:max-h-[90vh]
     flex flex-col overflow-hidden rounded-2xl`

  const panelClasses = twMerge(basePanel, className)

  return (
    <Transition show={show} leave="duration-200">
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-2 py-4 sm:px-4 sm:py-6"
        onClose={close}
      >
        <TransitionChild
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-black/50" />
        </TransitionChild>

        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <DialogPanel className={panelClasses}>
            {children}
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  )
}
