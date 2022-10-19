import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { control } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container d-flex justify-content-center">
      <Form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />

          {errors?.email?.type === "required" && (
            <Form.Text className="text-danger">Email is Required</Form.Text>
          )}
          {errors?.email?.type === "pattern" && (
            <Form.Text className="text-danger">Enter Valid Email</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            {...register("name", {
              required: true,
            })}
          />
          {errors?.name?.type === "required" && (
            <Form.Text className="text-danger">Your Name Is Required</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            placeholder="Enter phone"
            {...register("phone", {
              required: true,
              minLength: 12,
            })}
          />
          {errors?.phone?.type === "required" && (
            <Form.Text className="text-danger">
              Your phone Is Required
            </Form.Text>
          )}
          {errors?.phone?.type === "minLength" && (
            <Form.Text className="text-danger">Min Lenght 12</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("Password", {
              required: true,
            })}
          />
          {errors?.Password?.type === "required" && (
            <Form.Text className="text-danger">password Is Required</Form.Text>
          )}
        </Form.Group>
        <Form.Group>
          <Controller
            name="select"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: 1, label: "angular" },
                  { value: 2, label: "react" },
                  { value: 3, label: "vue" },
                  { value: 3, label: "vue" },
                  { value: 4, label: "next" },
                  { value: 5, label: "jquery" },
                ]}
              />
            )}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
