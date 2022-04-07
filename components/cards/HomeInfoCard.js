export default function HomeInfoCard({ title, content }) {
  return (
    <div className=" w-4/5 md:w-60 lg:w-72 py-20 px-10 border border-black shadow-2xl dark:border-gray-200">
      <h2 className="text-2xl bold pb-2 border-b border-gray-600">{title}</h2>
      <p className="mt-4">{content}</p>
    </div>
  );
}
