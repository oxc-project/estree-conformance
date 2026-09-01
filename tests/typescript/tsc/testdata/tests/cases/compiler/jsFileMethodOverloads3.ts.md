__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 165
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 167
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "start": 175,
            "end": 184
          }
        ],
        "start": 169,
        "end": 186
      },
      "expression": false,
      "start": 154,
      "end": 186
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 205
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 206,
                  "end": 209
                }
              ],
              "optional": false,
              "start": 203,
              "end": 210
            },
            "definite": false,
            "start": 199,
            "end": 210
          }
        ],
        "declare": false,
        "start": 195,
        "end": 211
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 188,
      "end": 211
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 229
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 230,
                  "end": 237
                }
              ],
              "optional": false,
              "start": 227,
              "end": 238
            },
            "definite": false,
            "start": 223,
            "end": 238
          }
        ],
        "declare": false,
        "start": 219,
        "end": 239
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 212,
      "end": 239
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 154,
  "end": 239
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 154,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 175,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 188,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 212,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 230,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  }
]
```
