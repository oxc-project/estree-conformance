__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Numbers1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 35
          }
        ],
        "start": 19,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strings1",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 56
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 63,
              "end": 66
            },
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
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 75
          }
        ],
        "start": 57,
        "end": 77
      },
      "declare": false,
      "start": 38,
      "end": 77
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Numbers1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 105
                },
                "typeArguments": null,
                "start": 97,
                "end": 105
              },
              "start": 95,
              "end": 105
            },
            "start": 94,
            "end": 105
          },
          "init": null,
          "definite": false,
          "start": 94,
          "end": 105
        }
      ],
      "declare": true,
      "start": 82,
      "end": 106
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 109,
            "end": 110
          },
          "optional": false,
          "computed": true,
          "start": 107,
          "end": 111
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 114,
          "end": 115
        },
        "start": 107,
        "end": 115
      },
      "directive": null,
      "start": 107,
      "end": 116
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 128,
            "end": 131
          },
          "optional": false,
          "computed": true,
          "start": 126,
          "end": 132
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 135,
          "end": 136
        },
        "start": 126,
        "end": 136
      },
      "directive": null,
      "start": 126,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Strings1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 171
                },
                "typeArguments": null,
                "start": 163,
                "end": 171
              },
              "start": 161,
              "end": 171
            },
            "start": 160,
            "end": 171
          },
          "init": null,
          "definite": false,
          "start": 160,
          "end": 171
        }
      ],
      "declare": true,
      "start": 148,
      "end": 172
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 175,
            "end": 178
          },
          "optional": false,
          "computed": true,
          "start": 173,
          "end": 179
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 182,
          "end": 183
        },
        "start": 173,
        "end": 183
      },
      "directive": null,
      "start": 173,
      "end": 184
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 206,
            "end": 207
          },
          "optional": false,
          "computed": true,
          "start": 204,
          "end": 208
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 211,
          "end": 212
        },
        "start": 204,
        "end": 212
      },
      "directive": null,
      "start": 204,
      "end": 213
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 232
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Numbers1",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 38,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Strings1",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 63,
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
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 82,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
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
    "value": "Numbers1",
    "start": 97,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 108,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 148,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 156,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Strings1",
    "start": 163,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "type": "Identifier",
    "value": "y",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  }
]
```
