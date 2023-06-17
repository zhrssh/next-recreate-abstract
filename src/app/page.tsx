"use client"

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center bg-black text-slate-100 px-16 py-4">
        <div className="font-serif font-bold text-xl">
          Lumina | Help Center
        </div>
        <div className="flex flex-row gap-2">
          <button type="button" className="border border-slate-100 rounded px-3 py-1 bg-stone-900 hover:bg-stone-500 focus-within:bg-stone-500 outline-none text-sm" onClick={e => alert("You've clicked submit!")}>Submit a request</button>
          <button type="button" className="border-0 rounded px-5 py-1 bg-indigo-600 hover:bg-indigo-400 focus-within:bg-indigo-400 outline-none text-sm" onClick={e => alert("You've clicked sign in!")}>Sign in</button>
        </div>
      </header>
      <div className="flex flex-col items-center gap-8 py-24 bg-slate-200">
        <div className="text-stone-900 text-6xl font-sans">How can we help?</div>
        <form className="flex w-1/2">
          <div className="flex flex-grow border border-stone-400 rounded gap-2 px-3 py-2 bg-slate-50 ">
            <input type="text" placeholder="Search" className="w-full text-sm"/>
            <button type="button" onClick={e => alert("You've clicked search!")}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcFJREFUSEu11curTmEUx/HPiQzkUpTLREgYuEXJAIUilKlLMSBFYUAZ+APIhIQwoJCUP+B0RgohE6RElBIZkEvkfm3VOnq9zt7vM9jvGu5n7fV91uW3nh5dtp4ux1cHmID1WIXZeZE76MVFPC+53ECAETiPNTUBfuMSNuNTHagdMBS3MANfcQpH8CSDTMZubMWQ9F2E71WQdsA5bMQzrMCDih9noQ/jcQh7SgAzcQ8/MB9R7zpbjCv4hkl4MZBzawZHsQPHsLOkgbiADdiHA50AjzEl63+/ELAEl3ENkdF/1prBR0STB+FXIWAUXuMNRncCvMdwDEPASix8P+AVxnQC3E1BzcPtkuhYgJtZpmWdAAexFyexvRBwFpsQA7KrE2AqHuJn4ZiGwK5m0Mqs24V2OuX/FMvxqCKTOSm0san2bSVCC5/WVfEFJ3A4lR3nkWWsii0YnEGjB6H6aHbtmPYfjkwBra7pwzvsxzrMTdUvRXz/x+rW9cRU6UrE7vmc03UDx/EWoYMQWqzzmMKYpNDEX2viwQnIdUxHbIOFeNlPaAIQsUJkMVHTsj9nmgZEvHFYm+9HoyWq1WRTJaqEdB3wBzsRVhkyGVX0AAAAAElFTkSuQmCC" />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}