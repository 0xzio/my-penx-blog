import React, { FC, PropsWithChildren } from 'react'
import { Plus } from 'lucide-react'
import { useAccount } from 'wagmi'
import { Button } from 'uikit'
import { useSpaces } from '@penx/hooks'
import { store } from '@penx/store'
import { trpc } from '@penx/trpc-client'

interface Props {}

export const NewNodeButton: FC<PropsWithChildren<Props>> = () => {
  const { address = '' } = useAccount()
  const { activeSpace } = useSpaces()
  return (
    <Button
      size="sm"
      variant="ghost"
      colorScheme="gray500"
      isSquare
      // onClick={() => store.createPageNode()}
      onClick={() => {
        trpc.inbox.addText.mutate({
          address,
          spaceId: activeSpace.id,
          text: 'Hello world',
          encryptionKey: '123456',
        })
      }}
    >
      <Plus />
    </Button>
  )
}
