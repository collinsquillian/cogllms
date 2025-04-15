#!/usr/bin/env python3

import panflute as pf

def prepare(doc):
    """
    Prepare function that runs before processing the document.
    Currently unused but required by panflute's filter interface.
    """
    pass

def action(elem, doc):
    """
    Main filter function that processes each element in the document.
    
    Args:
        elem: The current element being processed
        doc: The entire document being processed
        
    Returns:
        The processed element or None if the element should be removed
    """
    # Check if the element is a code block with the 'mermaid' class
    if isinstance(elem, pf.CodeBlock) and 'mermaid' in elem.classes:
        # Replace the code block with a div that has:
        # 1. The mermaid class for Mermaid.js to recognize it
        # 2. The raw Mermaid diagram code as HTML content
        return pf.Div(pf.RawBlock(elem.text, format='html'), classes=['mermaid'])

def finalize(doc):
    """
    Finalize function that runs after processing the document.
    Currently unused but required by panflute's filter interface.
    """
    pass

def main(doc=None):
    """
    Main entry point for the filter.
    
    Args:
        doc: The document to process (provided by pandoc)
        
    Returns:
        The processed document
    """
    return pf.run_filter(action, prepare=prepare, finalize=finalize, doc=doc)

if __name__ == '__main__':
    main() 