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
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 26
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
              "type": "Identifier",
              "decorators": [],
              "name": "naam",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 31,
            "end": 44
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 50
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 52,
                "end": 58
              },
              "start": 50,
              "end": 58
            },
            "accessibility": null,
            "static": false,
            "start": 47,
            "end": 58
          }
        ],
        "start": 27,
        "end": 60
      },
      "declare": false,
      "start": 10,
      "end": 60
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
            "name": "bob",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Person",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 87
                },
                "typeArguments": null,
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "start": 76,
            "end": 87
          },
          "init": null,
          "definite": false,
          "start": 76,
          "end": 87
        }
      ],
      "declare": true,
      "start": 62,
      "end": 87
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
            "name": "alice",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Person",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 115
                },
                "typeArguments": null,
                "start": 109,
                "end": 115
              },
              "start": 107,
              "end": 115
            },
            "start": 102,
            "end": 115
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 115
        }
      ],
      "declare": true,
      "start": 88,
      "end": 115
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "naam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 238
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "naam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 238
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 234,
                "end": 238
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "age",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 243
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "age",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 243
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 240,
                "end": 243
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 245
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bob",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 255
                },
                "start": 249,
                "end": 255
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 265
                },
                "start": 257,
                "end": 265
              }
            ],
            "start": 248,
            "end": 266
          },
          "definite": false,
          "start": 232,
          "end": 266
        }
      ],
      "declare": false,
      "start": 226,
      "end": 266
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 266
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "naam",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 62,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "bob",
    "start": 76,
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
    "value": "Person",
    "start": 81,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 88,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "alice",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 109,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "naam",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "bob",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "alice",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  }
]
```
