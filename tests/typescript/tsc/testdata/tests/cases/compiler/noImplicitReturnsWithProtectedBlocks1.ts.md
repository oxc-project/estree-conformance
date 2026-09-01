__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "log",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 21,
          "end": 30
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        },
        "start": 31,
        "end": 37
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 63,
          "end": 69
        },
        "start": 61,
        "end": 69
      },
      "body": null,
      "expression": false,
      "start": 39,
      "end": 70
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "main1",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 91,
          "end": 97
        },
        "start": 89,
        "end": 97
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 128
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 125,
                    "end": 130
                  },
                  "start": 118,
                  "end": 131
                }
              ],
              "start": 108,
              "end": 137
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 163
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "in finally",
                        "raw": "\"in finally\"",
                        "start": 164,
                        "end": 176
                      }
                    ],
                    "optional": false,
                    "start": 160,
                    "end": 177
                  },
                  "directive": null,
                  "start": 160,
                  "end": 178
                }
              ],
              "start": 150,
              "end": 184
            },
            "start": 104,
            "end": 184
          }
        ],
        "start": 98,
        "end": 186
      },
      "expression": false,
      "start": 72,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 186
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 39,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 72,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "main1",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 118,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 125,
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
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "String",
    "value": "\"in finally\"",
    "start": 164,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  }
]
```
