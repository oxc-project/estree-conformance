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
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 19,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 39
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
              "name": "document",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 64
                },
                "typeArguments": null,
                "start": 56,
                "end": 64
              },
              "start": 54,
              "end": 64
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 65
          }
        ],
        "start": 40,
        "end": 67
      },
      "declare": false,
      "start": 23,
      "end": 67
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
            "name": "window",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 94
                },
                "typeArguments": null,
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "start": 80,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 80,
          "end": 94
        }
      ],
      "declare": true,
      "start": 68,
      "end": 95
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 110
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 122
                },
                "init": {
                  "type": "Literal",
                  "value": "test1",
                  "raw": "\"test1\"",
                  "start": 125,
                  "end": 132
                },
                "definite": false,
                "start": 121,
                "end": 132
              }
            ],
            "declare": false,
            "start": 117,
            "end": 133
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
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                },
                "init": {
                  "type": "Literal",
                  "value": "test 2isn't this a lot of fun",
                  "raw": "\"test 2\\\nisn't this a lot of fun\"",
                  "start": 146,
                  "end": 179
                },
                "definite": false,
                "start": 142,
                "end": 179
              }
            ],
            "declare": false,
            "start": 138,
            "end": 180
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 199
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "document",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 208
                  },
                  "optional": false,
                  "computed": false,
                  "start": 193,
                  "end": 208
                },
                "definite": false,
                "start": 189,
                "end": 208
              }
            ],
            "declare": false,
            "start": 185,
            "end": 209
          }
        ],
        "start": 111,
        "end": 211
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 97,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 211
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
    "value": "Document",
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
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 23,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 46,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 56,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 68,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 97,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"test1\"",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "String",
    "value": "\"test 2\\\nisn't this a lot of fun\"",
    "start": 146,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 200,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  }
]
```
