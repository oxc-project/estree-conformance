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
        "name": "ITreeItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 41
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 59,
                "end": 63
              },
              "start": 57,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 64
          }
        ],
        "start": 42,
        "end": 66
      },
      "declare": false,
      "start": 22,
      "end": 66
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeWithId",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 83
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ITreeItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 95
            },
            "typeArguments": null,
            "start": 86,
            "end": 95
          },
          {
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
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 102
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  },
                  "start": 103,
                  "end": 111
                },
                "accessibility": null,
                "static": false,
                "start": 100,
                "end": 111
              }
            ],
            "start": 98,
            "end": 113
          }
        ],
        "start": 86,
        "end": 113
      },
      "declare": false,
      "start": 68,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMaxId",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 133
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NodeWithId",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 151
                },
                "typeArguments": null,
                "start": 141,
                "end": 151
              },
              "start": 141,
              "end": 153
            },
            "start": 139,
            "end": 153
          },
          "start": 134,
          "end": 153
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 155,
        "end": 158
      },
      "expression": false,
      "start": 116,
      "end": 158
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
            "name": "nodes",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 171
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 174,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ITreeItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 189
                },
                "typeArguments": null,
                "start": 180,
                "end": 189
              },
              "start": 180,
              "end": 191
            },
            "start": 174,
            "end": 191
          },
          "definite": false,
          "start": 166,
          "end": 191
        }
      ],
      "declare": false,
      "start": 160,
      "end": 192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMaxId",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 201
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nodes",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 207
          }
        ],
        "optional": false,
        "start": 193,
        "end": 208
      },
      "directive": null,
      "start": 193,
      "end": 209
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 209
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "ITreeItem",
    "start": 32,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "NodeWithId",
    "start": 73,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "ITreeItem",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "type": "Identifier",
    "value": "Id",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 116,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "getMaxId",
    "start": 125,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "NodeWithId",
    "start": 141,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "nodes",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 177,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "ITreeItem",
    "start": 180,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "getMaxId",
    "start": 193,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "nodes",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  }
]
```
