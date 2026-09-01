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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 110
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aa",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 114
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "abcde",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 121
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 136
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 140
                },
                "optional": false,
                "computed": false,
                "start": 129,
                "end": 140
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aa",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 147
                    },
                    "start": 141,
                    "end": 147
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "abcde",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 155
                  },
                  "start": 141,
                  "end": 155
                }
              ],
              "optional": false,
              "start": 129,
              "end": 156
            },
            "directive": null,
            "start": 129,
            "end": 157
          }
        ],
        "start": 123,
        "end": 159
      },
      "expression": false,
      "start": 96,
      "end": 159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 273
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 275
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aa",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 279
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "abcde",
          "optional": false,
          "typeAnnotation": null,
          "start": 281,
          "end": 286
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 301
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 305
                },
                "optional": false,
                "computed": false,
                "start": 294,
                "end": 305
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 307
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aa",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 312
                    },
                    "start": 306,
                    "end": 312
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "abcde",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 320
                  },
                  "start": 306,
                  "end": 320
                }
              ],
              "optional": false,
              "start": 294,
              "end": 321
            },
            "directive": null,
            "start": 294,
            "end": 322
          }
        ],
        "start": 288,
        "end": 324
      },
      "expression": false,
      "start": 261,
      "end": 324
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 96,
  "end": 324
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 96,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "abcde",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "abcde",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 261,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "abcde",
    "start": 281,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "abcde",
    "start": 315,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  }
]
```
