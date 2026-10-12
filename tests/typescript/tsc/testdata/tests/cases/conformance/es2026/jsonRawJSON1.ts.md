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
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 14
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "rawJSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 22
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 22
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "12345678901234567890",
                "raw": "\"12345678901234567890\"",
                "start": 23,
                "end": 45
              }
            ],
            "optional": false,
            "start": 10,
            "end": 46
          },
          "definite": false,
          "start": 6,
          "end": 46
        }
      ],
      "declare": false,
      "start": 0,
      "end": 47
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              },
              "start": 55,
              "end": 63
            },
            "start": 54,
            "end": 63
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "rawJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 75
            },
            "optional": false,
            "computed": false,
            "start": 66,
            "end": 75
          },
          "definite": false,
          "start": 54,
          "end": 75
        }
      ],
      "declare": false,
      "start": 48,
      "end": 76
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "start": 83,
            "end": 92
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 99
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringify",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 109
              },
              "optional": false,
              "computed": false,
              "start": 95,
              "end": 109
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 117
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 120
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 112,
                    "end": 120
                  }
                ],
                "start": 110,
                "end": 122
              }
            ],
            "optional": false,
            "start": 95,
            "end": 123
          },
          "definite": false,
          "start": 83,
          "end": 123
        }
      ],
      "declare": false,
      "start": 77,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rawJSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 135
          },
          "optional": false,
          "computed": false,
          "start": 126,
          "end": 135
        },
        "right": {
          "type": "Literal",
          "value": "0",
          "raw": "\"0\"",
          "start": 138,
          "end": 141
        },
        "start": 126,
        "end": 141
      },
      "directive": null,
      "start": 126,
      "end": 142
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 161,
                "end": 168
              },
              "start": 159,
              "end": 168
            },
            "start": 158,
            "end": 168
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 168
        }
      ],
      "declare": true,
      "start": 144,
      "end": 169
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 178
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isRawJSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 188
          },
          "optional": false,
          "computed": false,
          "start": 174,
          "end": 188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 190
          }
        ],
        "optional": false,
        "start": 174,
        "end": 191
      },
      "consequent": {
        "type": "BlockStatement",
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 208,
                      "end": 214
                    },
                    "start": 206,
                    "end": 214
                  },
                  "start": 205,
                  "end": 214
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 218
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rawJSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 226
                  },
                  "optional": false,
                  "computed": false,
                  "start": 217,
                  "end": 226
                },
                "definite": false,
                "start": 205,
                "end": 226
              }
            ],
            "declare": false,
            "start": 199,
            "end": 227
          }
        ],
        "start": 193,
        "end": 229
      },
      "alternate": null,
      "start": 170,
      "end": 229
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"12345678901234567890\"",
    "start": 23,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 100,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 144,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 152,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "isRawJSON",
    "start": 179,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 199,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  }
]
```
