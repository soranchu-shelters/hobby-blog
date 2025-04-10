import { useState } from 'react'
import { Dialog, DialogContent } from './ui/dialog'

export function Gallery({ photos }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((image, key) => (
          <button
            key={key}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedPhotoIndex(key)}
          >
            <img
              src={image.src || '/placeholder.svg'}
              alt=""
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={!!selectedPhotoIndex}
        onOpenChange={(open) => !open && setSelectedPhotoIndex(null)}
      >
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-none">
          <div className="relative w-full">
            {selectedPhotoIndex && (
              <img
                src={photos[selectedPhotoIndex].src || '/placeholder.svg'}
                alt=""
                className="object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
