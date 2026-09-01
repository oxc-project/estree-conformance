__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "kSymbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 20
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 29
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "my-symbol",
                  "raw": "\"my-symbol\"",
                  "start": 30,
                  "end": 41
                }
              ],
              "optional": false,
              "start": 23,
              "end": 42
            },
            "definite": false,
            "start": 13,
            "end": 42
          }
        ],
        "declare": false,
        "start": 7,
        "end": 43
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "kSymbol",
    "start": 13,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"my-symbol\"",
    "start": 30,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
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
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 109
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 115
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 135
              },
              "start": 123,
              "end": 136
            }
          ],
          "start": 117,
          "end": 138
        },
        "expression": false,
        "start": 99,
        "end": 138
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 92,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 92,
  "end": 138
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 92,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 99,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 123,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  }
]
```
