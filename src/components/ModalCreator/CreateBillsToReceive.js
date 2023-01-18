import React, { useState } from "react";
import Modal from "react-modal";
import "../../assets/styles/modalStyle.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CurrencyInput from 'react-currency-masked-input'

const CreateBillsToPaySchemma = yup.object().shape({
  nameClient: yup.string().required('Fornecedor não informado'),
  amount: yup.string().required('Valor não informado'),
  dueDate:yup.date().required('Vencimento não informado'),
  fees:yup.string().required('Juros Não informado'),
  ticket: yup.string().required('Titular da conta não informado'),
  });

  
export default function CreateBillsToReceive() {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(CreateBillsToPaySchemma)
      });
      const onSubmit = data => console.log(data);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
        <i className="fas fa-plus mr-1"></i> 
           Cadastrar Valor à Receber
        </button>
      </div>
      <div className="Container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <div className="modalHeader">
          <h2>Cadastro de Contas à Receber</h2>
            <button type="button" onClick={closeModal} className="btnClose">
              X
            </button>
          </div>
          <br />
          <hr />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" text-center mb-3 font-bold text-red-500">
              <p className="mb-1 ">{errors.nameClient?.message}</p>
              <p className="mb-1 ">{errors.amount?.message}</p>
              <p className="mb-1 ">{errors.dueDate?.message}</p>
              <p className="mb-1 ">{errors.fees?.message}</p>
              <p className="mb-1 ">{errors.ticket?.message}</p>
            </div>
            <div className="w-full">
              <label
                className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                htmlFor="grid-password"
              >
                Vencimento
              </label>
              <input
                {...register("dueDate")}
                type="date"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="SP"
              />
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Cliente
                </label>
                <input
                  {...register("nameClient")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="dargon systems"
                />
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Valor à Pagar
                </label>
                <CurrencyInput 
                  {...register("amount")}
                  type="number"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                />
              </div>
            </div>
            <div className="flex">
            <div className="mr-3 lg:w-6/12">
            <label
                className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                htmlFor="grid-password"
              >
                Juros
              </label>
              <CurrencyInput 

                {...register("fees")}
                type="number"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

              />
            </div>
            <div className="mb-3 lg:w-6/12">
            <label
                className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                htmlFor="grid-password"
              >
                Multa
              </label>
              <CurrencyInput
                {...register("ticket")}
                type="number"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

              />
            </div>
             
            </div>
            <div>
            <br />
            <hr />
            <br />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={closeModal}
                className="bg-blueGray-500 text-black active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Confirmar
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
