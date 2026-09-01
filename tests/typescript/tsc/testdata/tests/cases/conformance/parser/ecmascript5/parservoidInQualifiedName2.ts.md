__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "v",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8,
                    "end": 9
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "void",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10,
                    "end": 14
                  },
                  "start": 8,
                  "end": 14
                },
                "typeArguments": null,
                "start": 8,
                "end": 14
              },
              "start": 6,
              "end": 14
            },
            "start": 4,
            "end": 14
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 15
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "void",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  }
]
```
