__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 86
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 97,
                    "end": 100
                  },
                  "start": 95,
                  "end": 100
                },
                "start": 90,
                "end": 100
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 105,
              "end": 109
            },
            "id": null,
            "generator": false,
            "start": 89,
            "end": 109
          },
          "definite": false,
          "start": 83,
          "end": 109
        }
      ],
      "declare": false,
      "start": 77,
      "end": 110
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greet",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 126
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 135
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 138,
                      "end": 144
                    },
                    "start": 136,
                    "end": 144
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 131,
                  "end": 144
                }
              ],
              "start": 130,
              "end": 145
            },
            "start": 128,
            "end": 145
          },
          "start": 127,
          "end": 145
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 157,
              "end": 161
            },
            "start": 150,
            "end": 162
          }
        ],
        "start": 147,
        "end": 164
      },
      "expression": false,
      "start": 112,
      "end": 164
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 179,
                "end": 182
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 178,
              "end": 185
            },
            "children": [],
            "closingElement": null,
            "start": 178,
            "end": 185
          },
          "definite": false,
          "start": 172,
          "end": 185
        }
      ],
      "declare": false,
      "start": 166,
      "end": 186
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
            "name": "G",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "start": 198,
                "end": 203
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 197,
              "end": 206
            },
            "children": [],
            "closingElement": null,
            "start": 197,
            "end": 206
          },
          "definite": false,
          "start": 193,
          "end": 206
        }
      ],
      "declare": false,
      "start": 187,
      "end": 207
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 207
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 102,
    "end": 104
  },
  {
    "type": "Null",
    "value": "null",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Greet",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 150,
    "end": 156
  },
  {
    "type": "Null",
    "value": "null",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 187,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "JSXIdentifier",
    "value": "Greet",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  }
]
```
