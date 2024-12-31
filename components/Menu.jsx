import MENU from "@/public/data/Menu";
import MenuItem from "./MenuItem";

export default function Menu({ itemList }) {
  return (
    <>
      <h1 className="text-6xl text-celadon text-center p-2">Our special menu</h1>
      <ul className="flex flex-col  items-center justify-center ">
        {MENU ? (
          MENU.map((item) => (
            <li
              key={item.title} // Assuming 'title' is a unique identifier
              className="flex-1 flex p-4 text-center w-1/3 mt-10 mb-8 rounded-3xl bg-celadon text-accent"
            >
              <MenuItem
                title={item.name}
                description={item.description}
                price={item.price}
                imgUrl={item.image_url}
              />
            </li>
          ))
        ) : (
          <p>Menu is not available yet.</p> // Handle the case where MENU is not available
        )}
      </ul>
    </>
  );
}