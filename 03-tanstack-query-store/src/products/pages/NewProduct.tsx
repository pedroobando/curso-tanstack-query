import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useProductMutation } from '../hooks/useProductMutation';

interface InputForm {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const NewProduct: FC = () => {
  // const productMutation = useMutation({
  //   mutationFn: ProductsActions.createProduct,
  //   onSuccess: () => {
  //     console.log('Producto Creado');
  //   },
  // });

  const productMutation = useProductMutation();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputForm>({
    defaultValues: {
      title: 'Teclado Mecanico Ultra',
      price: 100,
      description:
        'Actualmente tengo un teclado genérico "gamer" bastante económico, sin embargo para programar es un poco incómodo la altura y disposición de las teclas, tienen alguna recomendación de que teclados son más cómodos y útiles para programar?',
      category: 'electronics',
      image: 'https://tecladosmecanicos-cdn.us-east-1.linodeobjects.com/wp-content/uploads/2022/08/IMG_0205.jpg',
    },
  });

  const urlImage = watch('image');
  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
    productMutation.mutate(data);
  };

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around items-center">
          <div className="flex-col w-[500px]">
            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  type="text"
                  className="mt-2 rounded-md px-2 h-8 w-full"
                  placeholder="Titulo del producto"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.title && (
              <span className="text-red-300 underline px-2 mt-1">El titulo del producto es requerido</span>
            )}

            <Controller
              control={control}
              name="price"
              rules={{ required: true, min: 1 }}
              render={({ field }) => (
                <input
                  type="number"
                  className="mt-4 rounded-md px-2 h-8 w-full"
                  placeholder="Precio del producto"
                  value={field.value}
                  onChange={(ev) => field.onChange(+ev.target.value)}
                />
              )}
            />

            {errors.price && (
              <span className="text-red-300 underline px-2 mt-1">El precio del producto debe ser mayor a cero (0)</span>
            )}

            <input
              type="url"
              className="mt-4 rounded-md px-2 h-8 w-full"
              placeholder="Url del producto"
              {...register('image', { required: true })}
            />
            {errors.image && (
              <span className="text-red-300 underline px-2 mt-1">El url de la imagen del producto es requerido</span>
            )}

            <textarea
              className="mt-4 rounded-md px-2 w-full"
              placeholder="Descripcion del producto"
              {...register('description')}
            />

            <select className="rounded-md p-3 mt-4 bg-gray-800 w-full" {...register('category')}>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>

            <br />
            <button
              type="submit"
              disabled={productMutation.isPending}
              className="mt-2 w-full bg-slate-600 border-gray-500 border-2 rounded-md  px-4 py-2 hover:bg-gray-800 transition-all duration-300 text-white"
            >
              {productMutation.isPending ? 'Actualizando...' : 'Crear Producto'}
            </button>
          </div>

          <div
            className="bg-white rounded-2xl p-10 flex items-center"
            style={{
              width: '500px',
              height: '600px',
            }}
          >
            <img src={urlImage} />
          </div>
        </div>
      </form>
    </div>
  );
};
