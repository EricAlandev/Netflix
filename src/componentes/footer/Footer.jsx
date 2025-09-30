import { Link } from "react-router-dom";

const Footer = ({
  numero,
  v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17
}) => {
  return (
    <>
      <h2
      className="max-w-[340px] text-gray-500 text-[16.5px] "
      >
        Dúvidas? Ligue para{" "}
        <a href="" className="text-gray-500 underline text-[15px]">
          {numero}
        </a>
      </h2>

      <div
      className="flex flex-col gap-2.5 mt-[50px]"
      >
        <Link className="text-gray-500 underline text-[16px]">{v1}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v2}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v3}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v4}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v5}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v6}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v7}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v8}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v9}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v10}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v11}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v12}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v13}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v14}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v15}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v16}</Link>
        <Link className="text-gray-500 underline text-[16px]">{v17}</Link>
      </div>
    </>
  );
};

export default Footer;
