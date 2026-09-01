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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 17
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 33,
                      "end": 39
                    },
                    "start": 31,
                    "end": 39
                  },
                  "start": 30,
                  "end": 39
                },
                "init": null,
                "definite": false,
                "start": 30,
                "end": 39
              }
            ],
            "declare": false,
            "start": 26,
            "end": 40
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "init": null,
                  "definite": false,
                  "start": 62,
                  "end": 63
                }
              ],
              "declare": false,
              "start": 56,
              "end": 63
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 67,
              "end": 69
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 71,
              "end": 78
            },
            "start": 45,
            "end": 78
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 99,
              "end": 101
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 103,
              "end": 110
            },
            "start": 83,
            "end": 110
          }
        ],
        "start": 20,
        "end": 112
      },
      "expression": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 131
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 147,
                      "end": 153
                    },
                    "start": 145,
                    "end": 153
                  },
                  "start": 144,
                  "end": 153
                },
                "init": null,
                "definite": false,
                "start": 144,
                "end": 153
              }
            ],
            "declare": false,
            "start": 140,
            "end": 154
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 177
                  },
                  "init": null,
                  "definite": false,
                  "start": 176,
                  "end": 177
                }
              ],
              "declare": false,
              "start": 170,
              "end": 177
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 181,
              "end": 183
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 185,
              "end": 192
            },
            "start": 159,
            "end": 192
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 209
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 213,
              "end": 215
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 217,
              "end": 224
            },
            "start": 197,
            "end": 224
          }
        ],
        "start": 134,
        "end": 226
      },
      "expression": false,
      "start": 113,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "number",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 113,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 119,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  }
]
```
