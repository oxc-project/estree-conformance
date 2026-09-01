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
        "name": "myRandBool",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 31,
          "end": 38
        },
        "start": 29,
        "end": 38
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 39
    },
    {
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 48,
                  "end": 53
                },
                "start": 48,
                "end": 53
              },
              "start": 46,
              "end": 53
            },
            "start": 45,
            "end": 53
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 57,
            "end": 62
          },
          "definite": false,
          "start": 45,
          "end": 63
        }
      ],
      "declare": false,
      "start": 41,
      "end": 64
    },
    {
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 72,
                      "end": 77
                    },
                    "start": 72,
                    "end": 77
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 80,
                      "end": 85
                    },
                    "start": 80,
                    "end": 85
                  }
                ],
                "start": 72,
                "end": 85
              },
              "start": 70,
              "end": 85
            },
            "start": 69,
            "end": 85
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 89,
            "end": 94
          },
          "definite": false,
          "start": 69,
          "end": 95
        }
      ],
      "declare": false,
      "start": 65,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 104,
                  "end": 109
                },
                "start": 104,
                "end": 109
              },
              "start": 102,
              "end": 109
            },
            "start": 101,
            "end": 109
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 123
            },
            "consequent": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 126,
              "end": 131
            },
            "alternate": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 135,
              "end": 140
            },
            "start": 113,
            "end": 141
          },
          "definite": false,
          "start": 101,
          "end": 142
        }
      ],
      "declare": false,
      "start": 97,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 151,
                      "end": 156
                    },
                    "start": 151,
                    "end": 156
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 159,
                      "end": 164
                    },
                    "start": 159,
                    "end": 164
                  }
                ],
                "start": 151,
                "end": 164
              },
              "start": 149,
              "end": 164
            },
            "start": 148,
            "end": 164
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 178
            },
            "consequent": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 181,
              "end": 186
            },
            "alternate": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 190,
              "end": 195
            },
            "start": 168,
            "end": 196
          },
          "definite": false,
          "start": 148,
          "end": 197
        }
      ],
      "declare": false,
      "start": 144,
      "end": 198
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 198
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
    "value": "myRandBool",
    "start": 17,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 31,
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
    "value": "let",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 65,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "myRandBool",
    "start": 113,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 124,
    "end": 125
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 157,
    "end": 158
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "myRandBool",
    "start": 168,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 179,
    "end": 180
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  }
]
```
