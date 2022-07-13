function Paragraph({ text }: { text?: string }) {
    return (
      <>
        <p className="text-base  leading-relaxed mt-0 mb-0 text-pink-800">
          {text}
        </p>
        <footer className="block text-pink-600">
          - Someone famous in <cite>Source Title</cite>
        </footer>
      </>
    );
  }