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
        "name": "callee",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 19,
                  "end": 25
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 28,
                  "end": 37
                }
              ],
              "start": 19,
              "end": 37
            },
            "start": 17,
            "end": 37
          },
          "start": 16,
          "end": 37
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            },
            "start": 40,
            "end": 48
          },
          "start": 39,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 50,
        "end": 53
      },
      "expression": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "caller",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 70
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 81,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "start": 77,
                  "end": 87
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 92,
                  "end": 96
                },
                "start": 89,
                "end": 96
              },
              "start": 76,
              "end": 96
            },
            "start": 74,
            "end": 96
          },
          "start": 71,
          "end": 96
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 98,
        "end": 101
      },
      "expression": false,
      "start": 55,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "caller",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "callee",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 116
          }
        ],
        "optional": false,
        "start": 103,
        "end": 117
      },
      "directive": null,
      "start": 103,
      "end": 118
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 118
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "callee",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 16,
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
    "value": "number",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 28,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 81,
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
    "value": "=>",
    "start": 89,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 103,
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
    "value": "callee",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  }
]
```
