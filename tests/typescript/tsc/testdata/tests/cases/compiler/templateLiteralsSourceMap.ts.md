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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "a",
                  "cooked": "a"
                },
                "tail": false,
                "start": 10,
                "end": 14
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "b",
                  "cooked": "b"
                },
                "tail": false,
                "start": 15,
                "end": 19
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "c",
                  "cooked": "c"
                },
                "tail": false,
                "start": 20,
                "end": 24
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 25,
                "end": 27
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 14,
                "end": 15
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 19,
                "end": 20
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 24,
                "end": 25
              }
            ],
            "start": 10,
            "end": 27
          },
          "definite": false,
          "start": 6,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 28
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 10,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 14,
    "end": 15
  },
  {
    "type": "Template",
    "value": "}b${",
    "start": 15,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 19,
    "end": 20
  },
  {
    "type": "Template",
    "value": "}c${",
    "start": 20,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 24,
    "end": 25
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  }
]
```
