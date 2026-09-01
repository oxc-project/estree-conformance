__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  }
                ],
                "start": 17,
                "end": 33
              },
              "start": 15,
              "end": 33
            },
            "start": 14,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 33
        }
      ],
      "declare": true,
      "start": 0,
      "end": 33
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
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 63,
                    "end": 69
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 74,
                        "end": 81
                      },
                      "start": 74,
                      "end": 83
                    },
                    "start": 71,
                    "end": 83
                  }
                ],
                "start": 54,
                "end": 84
              },
              "start": 52,
              "end": 84
            },
            "start": 48,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 84
        }
      ],
      "declare": true,
      "start": 34,
      "end": 84
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 94
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 99,
              "end": 100
            },
            "optional": false,
            "computed": true,
            "start": 97,
            "end": 101
          },
          "definite": false,
          "start": 92,
          "end": 101
        }
      ],
      "declare": false,
      "start": 86,
      "end": 101
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 110
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 115,
              "end": 116
            },
            "optional": false,
            "computed": true,
            "start": 113,
            "end": 117
          },
          "definite": false,
          "start": 108,
          "end": 117
        }
      ],
      "declare": false,
      "start": 102,
      "end": 117
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 126
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "property": {
              "type": "Literal",
              "value": 1000,
              "raw": "1000",
              "start": 131,
              "end": 135
            },
            "optional": false,
            "computed": true,
            "start": 129,
            "end": 136
          },
          "definite": false,
          "start": 124,
          "end": 136
        }
      ],
      "declare": false,
      "start": 118,
      "end": 136
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 146
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 153
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 154,
              "end": 155
            },
            "optional": false,
            "computed": true,
            "start": 149,
            "end": 156
          },
          "definite": false,
          "start": 144,
          "end": 156
        }
      ],
      "declare": false,
      "start": 138,
      "end": 156
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 165
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 172
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 173,
              "end": 174
            },
            "optional": false,
            "computed": true,
            "start": 168,
            "end": 175
          },
          "definite": false,
          "start": 163,
          "end": 175
        }
      ],
      "declare": false,
      "start": 157,
      "end": 175
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 184
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 191
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 192,
              "end": 193
            },
            "optional": false,
            "computed": true,
            "start": 187,
            "end": 194
          },
          "definite": false,
          "start": 182,
          "end": 194
        }
      ],
      "declare": false,
      "start": 176,
      "end": 194
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 203
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 210
            },
            "property": {
              "type": "Literal",
              "value": 1000,
              "raw": "1000",
              "start": 211,
              "end": 215
            },
            "optional": false,
            "computed": true,
            "start": 206,
            "end": 216
          },
          "definite": false,
          "start": 201,
          "end": 216
        }
      ],
      "declare": false,
      "start": 195,
      "end": 216
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 216
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 34,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 74,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 124,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 157,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 172,
    "end": 173
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 191,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 215,
    "end": 216
  }
]
```
