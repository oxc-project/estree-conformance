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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "hello\\world",
                  "cooked": "helloworld"
                },
                "tail": true,
                "start": 8,
                "end": 21
              }
            ],
            "expressions": [],
            "start": 8,
            "end": 21
          },
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "hello\\\\world",
                  "cooked": "hello\\world"
                },
                "tail": true,
                "start": 31,
                "end": 45
              }
            ],
            "expressions": [],
            "start": 31,
            "end": 45
          },
          "definite": false,
          "start": 27,
          "end": 45
        }
      ],
      "declare": false,
      "start": 23,
      "end": 46
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 52
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "hello\\\\\\world",
                  "cooked": "hello\\world"
                },
                "tail": true,
                "start": 55,
                "end": 70
              }
            ],
            "expressions": [],
            "start": 55,
            "end": 70
          },
          "definite": false,
          "start": 51,
          "end": 70
        }
      ],
      "declare": false,
      "start": 47,
      "end": 71
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "hello\\\\\\\\world",
                  "cooked": "hello\\\\world"
                },
                "tail": true,
                "start": 80,
                "end": 96
              }
            ],
            "expressions": [],
            "start": 80,
            "end": 96
          },
          "definite": false,
          "start": 76,
          "end": 96
        }
      ],
      "declare": false,
      "start": 72,
      "end": 97
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
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Template",
    "value": "`hello\\world`",
    "start": 8,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Template",
    "value": "`hello\\\\world`",
    "start": 31,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Template",
    "value": "`hello\\\\\\world`",
    "start": 55,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Template",
    "value": "`hello\\\\\\\\world`",
    "start": 80,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  }
]
```
