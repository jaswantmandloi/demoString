"use client";
import { ChangeEvent, useState, MouseEvent } from "react";
import { getSumFromString } from "./stringUtils";

export default function Home() {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");

  function handleSetString(e: ChangeEvent<HTMLInputElement>): void {
    setString(e.target.value);
  }

  function handleClickCalculateButton(e: MouseEvent<HTMLButtonElement>): void {
    try {
      const sum = getSumFromString(string);
      setResult(String(sum));
    } catch (error) {
      const err = error as Error;
      setResult(err.message);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Demo String
        </p>
      </div>
      <div>
        <input
          type="text"
          name="string"
          value={string}
          data-testid="string-input"
          placeholder="Enter string with separator ; or ,"
          onChange={handleSetString}
        />
        <button
          data-testid="string-calculate-btn"
          onClick={handleClickCalculateButton}
        >
          Get Sum
        </button>
      </div>
      <div data-testid="string-calculated-result">{result}</div>
    </main>
  );
}
