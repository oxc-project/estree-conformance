__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "start": 17,
              "end": 22
            },
            "start": 12,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 35,
                "end": 40
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "value",
                    "start": 41,
                    "end": 46
                  },
                  "value": {
                    "type": "Literal",
                    "value": "\nfoo: 23\n",
                    "raw": "\"\nfoo: 23\n\"",
                    "start": 47,
                    "end": 58
                  },
                  "start": 41,
                  "end": 58
                }
              ],
              "selfClosing": false,
              "start": 34,
              "end": 59
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 61,
                "end": 66
              },
              "start": 59,
              "end": 67
            },
            "start": 34,
            "end": 67
          },
          "definite": false,
          "start": 30,
          "end": 67
        }
      ],
      "declare": false,
      "start": 24,
      "end": 68
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
            "start": 75,
            "end": 76
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 80,
                "end": 85
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "value",
                    "start": 86,
                    "end": 91
                  },
                  "value": {
                    "type": "Literal",
                    "value": "\nfoo: 23\n",
                    "raw": "'\nfoo: 23\n'",
                    "start": 92,
                    "end": 103
                  },
                  "start": 86,
                  "end": 103
                }
              ],
              "selfClosing": false,
              "start": 79,
              "end": 104
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 106,
                "end": 111
              },
              "start": 104,
              "end": 112
            },
            "start": 79,
            "end": 112
          },
          "definite": false,
          "start": 75,
          "end": 112
        }
      ],
      "declare": false,
      "start": 69,
      "end": 113
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 121
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 125,
                "end": 130
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "value",
                    "start": 131,
                    "end": 136
                  },
                  "value": {
                    "type": "Literal",
                    "value": "\nfoo: 23\\n\n",
                    "raw": "'\nfoo: 23\\n\n'",
                    "start": 137,
                    "end": 150
                  },
                  "start": 131,
                  "end": 150
                }
              ],
              "selfClosing": false,
              "start": 124,
              "end": 151
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "input",
                "start": 153,
                "end": 158
              },
              "start": 151,
              "end": 159
            },
            "start": 124,
            "end": 159
          },
          "definite": false,
          "start": 120,
          "end": 159
        }
      ],
      "declare": false,
      "start": 114,
      "end": 160
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 160
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 24,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 34,
    "end": 35
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 35,
    "end": 40
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "JSXText",
    "value": "\"\nfoo: 23\n\"",
    "start": 47,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 60,
    "end": 61
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 80,
    "end": 85
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "JSXText",
    "value": "'\nfoo: 23\n'",
    "start": 92,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 105,
    "end": 106
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 125,
    "end": 130
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "JSXText",
    "value": "'\nfoo: 23\\n\n'",
    "start": 137,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 152,
    "end": 153
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 153,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  }
]
```
