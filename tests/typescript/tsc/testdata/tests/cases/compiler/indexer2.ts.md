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
        "name": "IHeapObjectProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 29
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 30,
        "end": 32
      },
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDirectChildrenMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 61
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 87
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "objectId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 98,
                    "end": 104
                  },
                  "start": 96,
                  "end": 104
                },
                "start": 88,
                "end": 104
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 108,
                "end": 115
              },
              "start": 106,
              "end": 115
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 73,
            "end": 116
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "objectId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 137,
                    "end": 143
                  },
                  "start": 135,
                  "end": 143
                },
                "start": 127,
                "end": 143
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IHeapObjectProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 166
                  },
                  "typeArguments": null,
                  "start": 147,
                  "end": 166
                },
                "start": 147,
                "end": 168
              },
              "start": 145,
              "end": 168
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 126,
            "end": 169
          }
        ],
        "start": 62,
        "end": 172
      },
      "declare": false,
      "start": 33,
      "end": 172
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
            "name": "directChildrenMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 198
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDirectChildrenMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 220
              },
              "typeArguments": null,
              "start": 202,
              "end": 220
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 221,
              "end": 223
            },
            "start": 201,
            "end": 223
          },
          "definite": false,
          "start": 181,
          "end": 223
        }
      ],
      "declare": false,
      "start": 177,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 225
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
    "value": "IHeapObjectProperty",
    "start": 10,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 33,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "IDirectChildrenMap",
    "start": 43,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 73,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "objectId",
    "start": 88,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "objectId",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "IHeapObjectProperty",
    "start": 147,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "directChildrenMap",
    "start": 181,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "IDirectChildrenMap",
    "start": 202,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  }
]
```
