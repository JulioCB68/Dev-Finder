interface ProfileProps {
  name: string;
  info: number;
}

export function InfoProfileGithub({ name, info }: ProfileProps) {
  return (
    <div className="flex-col">
      <p>{name}</p>
      <p className="text-xl font-semibold">{info}</p>
    </div>
  );
}
