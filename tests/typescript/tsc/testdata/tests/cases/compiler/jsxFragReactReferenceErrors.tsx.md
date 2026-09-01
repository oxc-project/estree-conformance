__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 128
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 140,
                  "end": 142
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "\n  ",
                    "raw": "\n  ",
                    "start": 142,
                    "end": 145
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 145,
                  "end": 148
                },
                "start": 140,
                "end": 148
              },
              "start": 133,
              "end": 148
            }
          ],
          "start": 130,
          "end": 150
        },
        "expression": false,
        "start": 110,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 103,
  "end": 150
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 110,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 119,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 141,
    "end": 142
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  }
]
```
