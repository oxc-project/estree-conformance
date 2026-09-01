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
        "name": "Salt",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pepper",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 38
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 39,
                "end": 41
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 41
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Basil",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 66
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [],
                "start": 67,
                "end": 70
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 51,
              "end": 70
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 44,
            "end": 70
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
                  "start": 77,
                  "end": 78
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Basil",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 86
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pepper",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 93
                  },
                  "optional": false,
                  "computed": false,
                  "start": 81,
                  "end": 93
                },
                "definite": false,
                "start": 77,
                "end": 93
              }
            ],
            "declare": false,
            "start": 73,
            "end": 94
          }
        ],
        "start": 15,
        "end": 96
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 96
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Salt",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Pepper",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Basil",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Basil",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Pepper",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  }
]
```
