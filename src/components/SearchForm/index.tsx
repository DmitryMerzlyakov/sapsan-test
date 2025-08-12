import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import style from "./style.module.css";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { ClearImage, SearchImage } from "@/assets/icons";
import { useSearchParams } from "react-router-dom";
import classNames from "classnames";

interface FormValues {
  searchText: string;
}

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const { control, handleSubmit, reset } = useForm<FormValues>(); 

  const handleClear = () => {
    reset();
    setSearchParams({});
  }
 
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSearchParams(() => {
      return new URLSearchParams({ search: data.searchText });
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(
        style.form,
        search && style.search
      )}
    >
      <Controller
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            inputPlaceholder="Телефоны, яблоки, груши..."
            iconPlaceholder={<SearchImage />}
            iconClear={<ClearImage />}
            onClear={handleClear}
          />
        )}
        control={control}
        name={"searchText"}
      />
      <Button type="submit">Искать</Button>
    </form>
  );
};
