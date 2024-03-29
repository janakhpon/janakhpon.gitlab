export interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  header: string;
}

export const Section: React.FC<SectionProps> = ({
  header,
  children,
  ...props
}) => (
  <section className="py-4 my-4" {...props}>
    <h2 className="text-4xl text-left my-3 font-semibold">{header}</h2>
    {children}
  </section>
);
