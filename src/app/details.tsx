interface Props {
  id: string;
}
const Details = ({ id }: Props) => {
  const list = [
    "Lavar a mano o en ciclo suave",
    "No usar blanqueador",
    "Secar a la sombra",
    "No planchar",
  ];
  return (
    <section id={id} className="text-center pt-[100px] mt-[-50px] mb-[50px] px-4">
      <h2 className="text-3xl font-bold">Cuidados del producto</h2>
      <div className="flex flex-col w-full max-w-[290px] mt-8 mx-auto gap-4">
        {list &&
          list.map((ulist, i) => (
            <div key={i} className="flex gap-3">
              <img src="/check-2.svg" alt="check" className="w-6 h-6" />
              <p className="text-start text-base sm:text-lg font-bold">
                {ulist}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Details;
