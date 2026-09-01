__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 51
            },
            "declare": false,
            "start": 29,
            "end": 51
          }
        ],
        "start": 22,
        "end": 53
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 53
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 67
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 71
                  },
                  "start": 64,
                  "end": 71
                },
                "typeArguments": null,
                "start": 64,
                "end": 71
              },
              "start": 62,
              "end": 71
            },
            "start": 59,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 59,
          "end": 71
        }
      ],
      "declare": false,
      "start": 55,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 73
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 29,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 64,
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
    "value": "Bar",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  }
]
```
