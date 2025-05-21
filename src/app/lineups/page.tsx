'use client';

import DropdownMenu from "@/components/ui/navigation/DropdownMenu";

const texts = ["A site", "B site", "Mid"]


export default function LineupsPage() {
  return (
    <div className="flex justify-center h-40">
      <div>
        <DropdownMenu options={texts} />

      </div>
    </div>

  )
}