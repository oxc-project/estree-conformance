__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Runtime",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "node",
              "raw": "\"node\"",
              "start": 15,
              "end": 21
            },
            "start": 15,
            "end": 21
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "deno",
              "raw": "\"deno\"",
              "start": 24,
              "end": 30
            },
            "start": 24,
            "end": 30
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bun",
              "raw": "\"bun\"",
              "start": 33,
              "end": 38
            },
            "start": 33,
            "end": 38
          }
        ],
        "start": 15,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "readRuntime",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 60
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 68,
              "end": 74
            },
            "start": 66,
            "end": 74
          },
          "start": 61,
          "end": 74
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Runtime",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 84
          },
          "typeArguments": null,
          "start": 77,
          "end": 84
        },
        "start": 75,
        "end": 84
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 100
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "node",
                    "raw": "\"node\"",
                    "start": 105,
                    "end": 111
                  },
                  "start": 95,
                  "end": 111
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 120
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "deno",
                    "raw": "\"deno\"",
                    "start": 125,
                    "end": 131
                  },
                  "start": 115,
                  "end": 131
                },
                "start": 95,
                "end": 131
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 140
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "bun",
                  "raw": "\"bun\"",
                  "start": 145,
                  "end": 150
                },
                "start": 135,
                "end": 150
              },
              "start": 95,
              "end": 150
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 177
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 168,
                    "end": 179
                  },
                  "start": 162,
                  "end": 180
                }
              ],
              "start": 152,
              "end": 186
            },
            "alternate": null,
            "start": 91,
            "end": 186
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 203
            },
            "start": 191,
            "end": 204
          }
        ],
        "start": 85,
        "end": 206
      },
      "expression": false,
      "start": 40,
      "end": 206
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 206
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Runtime",
    "start": 5,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"node\"",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"deno\"",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"bun\"",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 40,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "readRuntime",
    "start": 49,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Runtime",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 101,
    "end": 104
  },
  {
    "type": "String",
    "value": "\"node\"",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 112,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 121,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"deno\"",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 141,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"bun\"",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 162,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 191,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  }
]
```
