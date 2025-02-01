'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Star } from 'lucide-react';
import React from 'react';
import { Badge } from '../ui/badge';
import { Printout } from '../printout/clipping';
import { DialogTitle } from '@radix-ui/react-dialog';
const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, type: 'spring' } },
};

export function UpgradePlanModal({
  open,
  setOpen,
  children,
}: {
  trigger?: string;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}) {
  const features = ['ResumeDesk', 'fafo_labs'];

  const buttonChild = React.isValidElement<{
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }>(children)
    ? React.cloneElement(children)
    : children;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{buttonChild}</DialogTrigger>
      <DialogContent className="max-w-[950px] p-0 bg-transparent -ml-16">
        <motion.div
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="w-full h-full"
        >
          <Printout />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
