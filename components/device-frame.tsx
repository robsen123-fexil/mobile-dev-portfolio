import Image from "next/image"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type DeviceFrameProps = {
  variant?: "phone" | "tablet"
  src?: string
  alt?: string
  priority?: boolean
  className?: string
  imageClassName?: string
  children?: ReactNode
}

export function DeviceFrame({
  variant = "phone",
  src,
  alt = "",
  priority = false,
  className,
  imageClassName,
  children,
}: DeviceFrameProps) {
  const isTablet = variant === "tablet"

  return (
    <div
      className={cn(
        "device-frame",
        isTablet ? "device-frame--tablet" : "device-frame--phone",
        className
      )}
    >
      <div className="device-frame__bezel" aria-hidden>
        <span className="device-frame__speaker" />
        <span className="device-frame__camera" />
      </div>
      <div className="device-frame__screen">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={isTablet ? "(max-width: 768px) 80vw, 420px" : "(max-width: 768px) 45vw, 220px"}
            priority={priority}
            className={cn("object-cover object-top", imageClassName)}
          />
        ) : (
          children
        )}
      </div>
    </div>
  )
}
