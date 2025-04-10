import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from './ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const versions = [
  {
    value: 'latest',
    label: '最新バージョン',
  },
  {
    value: 'v2',
    label: 'バージョン 2.0',
  },
  {
    value: 'v1',
    label: 'バージョン 1.0',
  },
]

export function VersionSwitcher() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('latest')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? versions.find((version) => version.value === value)?.label
            : 'バージョンを選択...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="バージョンを検索..." />
          <CommandList>
            <CommandEmpty>バージョンが見つかりません</CommandEmpty>
            <CommandGroup>
              {versions.map((version) => (
                <CommandItem
                  key={version.value}
                  value={version.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === version.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {version.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
