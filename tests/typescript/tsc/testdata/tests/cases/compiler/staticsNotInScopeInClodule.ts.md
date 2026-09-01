__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Clod",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 28,
              "end": 30
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 31
          }
        ],
        "start": 11,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Clod",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 49
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 65
                },
                "definite": false,
                "start": 60,
                "end": 65
              }
            ],
            "declare": false,
            "start": 56,
            "end": 66
          }
        ],
        "start": 50,
        "end": 93
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 35,
      "end": 93
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 93
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Clod",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 17,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 35,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Clod",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  }
]
```
