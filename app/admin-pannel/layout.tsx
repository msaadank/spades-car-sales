import React from 'react'

const AdminLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <html lang='en'>
        <body>
            {children}
        </body>
    </html>
  )
}

export default AdminLayout