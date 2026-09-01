__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 11,
                "end": 16
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "value",
                    "start": 17,
                    "end": 22
                  },
                  "value": {
                    "type": "Literal",
                    "value": "\n  foo: 23\n",
                    "raw": "\"\n  foo: 23\n\"",
                    "start": 23,
                    "end": 36
                  },
                  "start": 17,
                  "end": 36
                }
              ],
              "selfClosing": false,
              "start": 10,
              "end": 37
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 39,
                "end": 44
              },
              "start": 37,
              "end": 45
            },
            "start": 10,
            "end": 45
          },
          "definite": false,
          "start": 6,
          "end": 45
        }
      ],
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 58,
                "end": 63
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "value",
                    "start": 64,
                    "end": 69
                  },
                  "value": {
                    "type": "Literal",
                    "value": "\nfoo: 23\n",
                    "raw": "'\nfoo: 23\n'",
                    "start": 70,
                    "end": 81
                  },
                  "start": 64,
                  "end": 81
                }
              ],
              "selfClosing": false,
              "start": 57,
              "end": 82
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 84,
                "end": 89
              },
              "start": 82,
              "end": 90
            },
            "start": 57,
            "end": 90
          },
          "definite": false,
          "start": 53,
          "end": 90
        }
      ],
      "declare": false,
      "start": 47,
      "end": 91
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 11,
    "end": 16
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "JSXText",
    "value": "\"\n  foo: 23\n\"",
    "start": 23,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 38,
    "end": 39
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 57,
    "end": 58
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 58,
    "end": 63
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "JSXText",
    "value": "'\nfoo: 23\n'",
    "start": 70,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 83,
    "end": 84
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 84,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  }
]
```
