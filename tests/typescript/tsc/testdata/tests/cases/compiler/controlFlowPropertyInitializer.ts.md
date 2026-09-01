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
            "name": "LANG",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 31
          },
          "init": {
            "type": "Literal",
            "value": "Turbo Pascal",
            "raw": "\"Turbo Pascal\"",
            "start": 34,
            "end": 48
          },
          "definite": false,
          "start": 27,
          "end": 48
        }
      ],
      "declare": false,
      "start": 21,
      "end": 48
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BestLanguage",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 68
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 79
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "LANG",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 86
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 75,
            "end": 87
          }
        ],
        "start": 69,
        "end": 89
      },
      "abstract": false,
      "declare": false,
      "start": 50,
      "end": 89
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 89
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "LANG",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"Turbo Pascal\"",
    "start": 34,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "BestLanguage",
    "start": 56,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "LANG",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  }
]
```
