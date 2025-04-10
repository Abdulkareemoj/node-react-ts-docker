import { useState } from "react";
import { QrCodeIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import QRCode from "./QrCode";
import { Button } from "./Button";

export function QrCodeButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <QrCodeIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>QR Code</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center p-6">
          <QRCode value="https://example.com" size={200} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
